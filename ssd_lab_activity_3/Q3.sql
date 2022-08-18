select Essn as Mgr_ssn ,count(pno) as numberOfProjects From 
(select T2.* from (select distinct Mgr_ssn from Department T1 join project T2 on T1.Dnumber = T2.Dnum where pname = 'ProductY') T1 join 
works_on T2 on T1.Mgr_ssn = T2.Essn) T group by  Essn