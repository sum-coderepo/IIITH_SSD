select concat(Fname, ' ', Lname) as full_name, SSN, Dname, Dnumber from (
select distinct T2.Fname, T2.Lname, T2.SSN, T3.Dname, T3.Dnumber from 
(select Super_ssn from employee T1 left join works_on T2 on T1.SSN = T2.Essn where Hours < 40) T1
JOIN
employee T2 on T1.Super_ssn = T2.ssn
JOIN department T3 on T1.Super_ssn = T3.Mgr_ssn ) T