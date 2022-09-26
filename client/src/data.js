import {Icon} from '@iconify/react';
import dashboardSolid from '@iconify/icons-clarity/dashboard-solid';
import documentAdd from '@iconify/icons-line-md/document-add';
import rightArrow from '@iconify/icons-bxs/right-arrow';
import {about01} from './assets';

export const NavLinks =[
    {
         id:1,
         name:'dashboard',
         icon:<Icon icon={dashboardSolid}/>,
         path:'/'
},
    {
        id:2,
        name:'add',
        icon:<Icon icon={documentAdd} /> ,
        path:'/addform'
    },
    {
        id:3,
        name:'edit/delete',
        icon:<Icon icon={documentAdd} /> ,
        path:'/addform/edit_delete'
    },
];

export const addForm=[
    {
        id:1,
        name:'New Projects',
        path:'/addform/addnewprojects',
        icon:<Icon icon={rightArrow} />
    },
    {
        id:2,
        name:'New Skills',
        path:'/addform/addnewskills',
        icon:<Icon icon={rightArrow} />
    },
];

export const projects =[
    {
        _id:1,
        project_name:'Project1',
        seletedFile:about01,
        codeLink:'https://github.com/yawai990?tab=repositories',
         demoLink:'https://bge22customerdata.netlify.app',
      desc:'This projects created in MERN.Here, u can insert the new customer data,search'
    },
    {
        _id:2,
        project_name:'Project2',
        seletedFile:about01,
        codeLink:'https://github.com/yawai990?tab=repositories',
         demoLink:'https://bge22customerdata.netlify.app',
      desc:'This projects created in MERN.Here, u can insert the new customer data,search'
    }
];

export const languageData =[
    {
        id:1,
        language:'HTML',
        image:''
    }
];
