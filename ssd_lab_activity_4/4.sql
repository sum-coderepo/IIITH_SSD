DELIMITER $$
DROP PROCEDURE IF EXISTS GetDetails;
CREATE PROCEDURE GetDetails (  INOUT fullNameList varchar(4000), 
INOUT fullcityList varchar(4000), 
INOUT fullcountryList varchar(4000),
INOUT fullgradeList varchar(4000)
)
BEGIN
  DECLARE finished INTEGER DEFAULT 0;
  DECLARE fullName varchar(100) DEFAULT "";
  DECLARE fullcity varchar(100) DEFAULT "";
  DECLARE fullcountry varchar(100) DEFAULT "";
  DECLARE fullgrade varchar(100) DEFAULT "";
   #Cursor declaration
      DEClARE curName
        CURSOR FOR
             SELECT TRIM(CUST_NAME) as CUST_NAME, 
             TRIM(CUST_CITY) as  CUST_CITY, 
             TRIM(CUST_COUNTRY) as  CUST_COUNTRY, 
             TRIM(grade) as  grade 
             FROM customer_db.customer WHERE AGENT_CODE like ('%A00%');
               #declare NOT FOUND handler
               DECLARE CONTINUE HANDLER FOR NOT FOUND SET finished = 1;
    #Open cursor
               OPEN curName;
    #fetch records
               getName: LOOP
                              FETCH curName INTO fullName, fullcity, fullcountry, fullgrade;
                              IF finished = 1 THEN LEAVE getName;
                              END IF;
                              SET fullNameList = CONCAT(fullName,";",fullNameList);
                              SET fullcityList = CONCAT(fullcity,";",fullcityList);
                              SET fullcountryList = CONCAT(fullcountry,";",fullcountryList);
                              SET fullgradeList = CONCAT(fullgrade,";",fullgradeList);
							  -- SET fullNameList = fullName;
                              -- SET fullcityList = fullcity;
                              -- SET fullcountryList = fullcountry;
                              -- SET fullgradeList = fullgrade;
                              -- select fullNameList, fullNameList, fullNameList, fullNameList;
                              
               END LOOP getName;
               
               CLOSE curName;
              
END$$
DELIMITER ;

SET @fullNameList = "";
SET @fullcityList = "";
SET @fullcountryList = "";
SET @fullgradeList = "";
CALL GetDetails(@fullNameList, @fullcityList, @fullcountryList, @fullgradeList);
SELECT @fullNameList, @fullcityList, @fullcountryList, @fullgradeList ;