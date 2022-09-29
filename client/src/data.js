import {Icon} from '@iconify/react';
import dashboardSolid from '@iconify/icons-clarity/dashboard-solid';
import documentAdd from '@iconify/icons-line-md/document-add';
import editIcon from '@iconify/icons-line-md/edit';
import rightArrow from '@iconify/icons-bxs/right-arrow';

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

//role means 0 = frontend, 1=backend, 2=database,4=ui/ux
export const languageData =[
    {id:1,name:'html',role:0},
    {id:2,name:'css',role:0},
    {id:3,name:'javascript',role:0},
    {id:4,name:'react',role:0},
    {id:5,name:'vue',role:0},
    {id:6,name:'typescript',role:0},
    {id:7,name:'elm',role:0},
    {id:8,name:'jquery',role:0},
    {id:9,name:'angular',role:0},
    {id:10,name:'swift',role:0},
    {id:11,name:'bootstrap',role:0},
    {id:12,name:'tailwind',role:0},
    {id:13,name:'semantic',role:0},
    {id:14,name:'tacit',role:0},
    {id:15,name:'bulma',role:0},
    {id:16,name:'nodejs',role:1},
    {id:17,name:'ruby',role:1},
    {id:18,name:'php',role:1},
    {id:19,name:'python',role:1},
    {id:20,name:'c#',role:1},
    {id:21,name:'c++',role:1},
    {id:22,name:'java',role:1},
    {id:23,name:'rerl',role:1},
    {id:24,name:'rust',role:1},
    {id:25,name:'mysql',role:2},
    {id:26,name:'mongodb',role:2},


]

