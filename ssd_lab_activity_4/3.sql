DELIMITER //
DROP PROCEDURE IF EXISTS lab4_3_namesGrades;
CREATE PROCEDURE lab4_3_namesGrades()
   BEGIN
      SELECT * from customer_db.customer where (OPENING_AMT + RECEIVE_AMT) >  10000;
	-- select cityName;
         END;
   //
   
   
call lab4_3_namesGrades