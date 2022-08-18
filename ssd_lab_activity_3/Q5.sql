select Mgr_ssn, Dnumber, count(distinct Dlocation) as num_distinct_locations from 
(select T1.Mgr_ssn, T2.Dlocation, T1.Dnumber from Department T1 join dept_locations T2  on T1.Dnumber = T2.Dnumber) T1 group by Mgr_ssn
having num_distinct_locations > 1;