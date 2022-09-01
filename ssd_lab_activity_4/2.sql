DELIMITER //
DROP PROCEDURE IF EXISTS lab4_2_custblr1;
CREATE PROCEDURE lab4_2_custblr1(IN cityName VARCHAR(30))	
   BEGIN
		DECLARE sum_val INT;
      SELECT * from customer where WORKING_AREA = cityName;
	-- select cityName;
         END;
   //
   
   
call lab4_2_custblr1('Bangalore')