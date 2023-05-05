pragma solidity ^0.8.18;
// SPDX-License-Identifier: MIT

contract Diplomas
{
    struct Diplom
    {
        string number;
        string department;
        string issue_date;
        bool is_active;
    }

    struct Student
    {
        string fio;
        string birthday;
        bool exists;
    }

    address owner;

    mapping(string=>mapping(string=>Student)) private students; //fio=>snils=>Student
    mapping(string=>mapping(string=>Diplom[])) private diplomas; //fio=>snils=>Diplomas[]
    mapping(address=>bool) experts;

    constructor() public
    {
        owner = msg.sender;
    }

    modifier OnlyOwner
    {
        require(msg.sender == owner, "Only owner can run this function!");
        _;
    }

    modifier OnlyExpert
    {
        require(experts[msg.sender], "Only expert can run this function");
        _;
    }

    function AddExpert(address new_expert) public OnlyOwner
    {
        require(!experts[new_expert], "Expert already exists");
        experts[new_expert] = true;
    }

    function AddStudent(string memory fio, string memory birthday, string memory snils) public OnlyExpert
    {
        if(!students[fio][snils].exists)
        {
            students[fio][snils].fio = fio;
            students[fio][snils].birthday = birthday;
            students[fio][snils].exists = true;
        }
    }

    function AddDiplom(string memory fio, string memory snils, string memory dep, string memory number, string memory issue_date) public OnlyExpert
    {
        if(students[fio][snils].exists)
        {
            Diplom memory d;
            d.department = dep;
            d.number = number;
            d.issue_date = issue_date;
            d.is_active = true;
            diplomas[fio][snils].push(d);
        }
        else revert('Student does not exist!');
    }

    function GetStudent(string memory fio, string memory snils) view public OnlyExpert returns(Student memory)
    {
        if(students[fio][snils].exists) return students[fio][snils];
        else revert('Student does not exist!');
    }
    
    function GetDiploma(string memory fio, string memory snils) view public returns(Diplom[] memory)
    {
        if(students[fio][snils].exists)
        {
            return diplomas[fio][snils];
        }
        revert('Student does not exist!');
    }

    function UpdateStudent(string memory new_fio, string memory old_fio, string memory snils) public OnlyExpert
    {
        if(students[old_fio][snils].exists)
        {
            Student memory s;
            s.fio = new_fio;
            s.birthday = students[old_fio][snils].birthday;
            s.exists = true;
            students[new_fio][snils] = s;
            students[old_fio][snils].exists = false;
        }
        else revert('Student does not exist!');
    }
}