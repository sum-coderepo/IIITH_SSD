select Dname, T.Dnumber, count as countoflocation from (select Dnumber,count(distinct Dlocation) as count from 
(select distinct Dno from (select Essn, Sex, count(*) as count from dependent where sex = 'F' group by Essn, Sex having count > 1) T1
join employee T2 on T1.Essn = T2.Super_ssn) T1
join dept_locations T3 on T1.Dno = T3.Dnumber group by Dnumber) T
join department T4 on T.Dnumber = T4.Dnumber