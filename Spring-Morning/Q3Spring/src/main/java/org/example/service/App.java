package org.example.service;

import org.example.model.Employee;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;


public class App 
{
    public static void main( String[] args )
    {
        ApplicationContext appcntxt = new FileSystemXmlApplicationContext("spring.xml");
        Employee employee = appcntxt.getBean("employee", Employee.class);
        System.out.println(employee.getName());
        try{
            employee.throwsException();
        }
        catch(Exception e){
            System.out.println("Exception Catched which is thrown by Employee");
        }

    }
}
