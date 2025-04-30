# python script for orders_dao
from datetime import datetime
from sql_connection import get_sql_connection

def insert_order(connection, order):
    cursor = connection.cursor()

    order_query = ("INSERT INTO orders "
                   "(customer_name, total, order_date) "
                   "VALUES (%s, %s, %s)")
    order_data = (order['customer_name'], order['grand_total'], datetime.now())

    cursor.execute(order_query, order_data)
    order_id = cursor.lastrowid

    order_details_query = ("INSERT INTO order_details "
                           "(order_id, product_id, quantity, total_price) "
                           "VALUES (%s, %s, %s, %s)")

    order_details_data = []
    for order_detail_record in order['order_details']:
        order_details_data.append([
            order_id,
            int(order_detail_record['product_id']),
            float(order_detail_record['quantity']),
            float(order_detail_record['total_price'])
        ])
    cursor.executemany(order_details_query, order_details_data)

    connection.commit()
    cursor.close()

    return order_id

def get_order_details(connection, order_id):
    cursor = connection.cursor()

    query = ("SELECT order_details.order_id, order_details.quantity, order_details.total_price, "
             "products.name, products.price_per_unit FROM order_details "
             "LEFT JOIN products ON order_details.product_id = products.product_id "
             "WHERE order_details.order_id = %s")

    data = (order_id,)

    cursor.execute(query, data)

    records = []
    for (order_id, quantity, total_price, product_name, price_per_unit) in cursor:
        records.append({
            'order_id': order_id,
            'quantity': quantity,
            'total_price': total_price,
            'product_name': product_name,
            'price_per_unit': price_per_unit
        })

    cursor.close()

    return records

def get_all_orders(connection):
    cursor = connection.cursor()
    query = ("SELECT order_id, customer_name, total, order_date FROM orders")
    cursor.execute(query)
    response = []
    for (order_id, customer_name, total, order_date) in cursor:
        response.append({
            'order_id': order_id,
            'customer_name': customer_name,
            'total': total,
            'order_date': order_date,
        })

    cursor.close()

    # append order details in each order
    for record in response:
        record['order_details'] = get_order_details(connection, record['order_id'])

    return response

if __name__ == '__main__':
    connection = get_sql_connection()
    print(get_all_orders(connection))
    # print(get_order_details(connection, 4))
    # Example insert_order usage:
    # print(insert_order(connection, {
    #     'customer_name': 'dhaval',
    #     'grand_total': '500',
    #     'order_details': [
    #         {
    #             'product_id': 1,
    #             'quantity': 2,
    #             'total_price': 50
    #         },
    #         {
    #             'product_id': 3,
    #             'quantity': 1,
    #             'total_price': 30
    #         }
    #     ]
    # }))
