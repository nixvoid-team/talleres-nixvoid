En sample_training.zips: ¿Cuantos zips se encuentran en New York?

db.zips.find({state:'NY'}).count()

En sample_training.zips: ¿ Cuantos zips se ubican en una ciudad que empieze con B y termine en M o empize con B y termine en N ?

{$or:[{city:{$regex:/^B.*N$/}},{city:{$regex:/^B.*M$/}}]}

En sample_analytics.customers: ¿Cuantas clientes tienen soo una cuenta?

db.customers.find({accounts:{$size:1}}).count()


En sample_analytics.transactions: ¿Cuentas cuentas han realizado transacciones con una cantidad mayor a 9900?

db.transactions.find({transactions:{$elemMatch:{amount:{$gt:9900}}}}).count()

¿Cuantas cuentas han realizado más de 80 transacciones y menos de 90 transacciones ?

db.transactions.find({$expr:{$and:[{$gt:[{$size:"$transactions"},80]},{$lt:[{$size:"$transactions"},90]}]}}).count()


En sample_training.routes: ¿Cuantas rutas no tienen paradas?

db.routes.find({stops:{$gt:0}}).count()
db.routes.find({stops:{$ne:0}}).count()

En sample_training.inspections: ¿ Cuantas inspecciones se realizaron el 25,26 o 27 de febrero del 2015 y su resultado fue una infracción ?

db.inspections.find({result:'Violation Issued',$or:[{date:'Feb 25 2015'},{date:'Feb 26 2015'},{date:'Feb 27 2015'}]}).count()
db.inspections.find({result:'Violation Issued',date:{$in:['Feb 25 2015','Feb 26 2015','Feb 27 2015']}}).count()
En sample_training.companies: ¿ Cuantas compañias ( fueron fundadas en 2004 y tienen un codigo categoria de "web" o "social" )  O   (fueron en el mes de agosto y tienen tienen un codigo categoria de "web" o "social" )

db.companies.find({category_code: {$in: ["web", "social"]}, $or: [{founded_year: 2004}, {founded_month: 8}]})
