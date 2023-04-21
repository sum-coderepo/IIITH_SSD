Step 1
Initial Users

from app import db, Student
db.create_all()
student_Sumeet = Student(name='Sumeet', password='p12',email='xyz@abc.com')
student_Ajay = Student(name='Ajay', password='Garg',email='hdhd@abc.com')
student_Rahul = Student(name='Rahul', password='dev',email='gdd@abc.com')
db.session.add(student_Sumeet)
db.session.add(student_Ajay)
db.session.add(student_Rahul)
db.session.commit()
Student.query.all()

Step 2
Run App.py

Rest APi
1. Login

http://127.0.0.1:5000/login
{
name: Sumeet
password: Agrawal
}

1. Login

http://127.0.0.1:5000/signup
{
name: Sumeet
password: Agrawal
email: abs@jldjlj.com
}

3. Logout
http://127.0.0.1:5000/logout