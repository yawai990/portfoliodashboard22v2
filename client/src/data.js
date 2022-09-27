import {Icon} from '@iconify/react';
import dashboardSolid from '@iconify/icons-clarity/dashboard-solid';
import documentAdd from '@iconify/icons-line-md/document-add';
import editIcon from '@iconify/icons-line-md/edit';
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
        icon:<Icon icon={editIcon} /> ,
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

export const editdelete = [
    {id:1,name:'Projects',path:'/projects/edit_delete'},
    {id:2,name:'Skills',path:'/skills/edit_delete'},
    {id:3,name:'Experiences',path:'/experiences/edit_delete'},
    {id:4,name:'Contact',path:'/contact/edit_delete'}
]

export const languageData =[
    {
        id:1,
        language:'HTML',
        image:''
    }
];
