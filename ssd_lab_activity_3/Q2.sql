select concat(T2.Fname,' ', T2.Lname) as fullName , ssn, NumberOfEmployees, Dno from
(select Super_ssn ,count(*) as NumberOfEmployees from employee group by Super_ssn) T1
join employee T2 on T1.Super_ssn = T2.SSN order by fullName