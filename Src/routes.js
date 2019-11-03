import loginAdmin from './views/admin/login';
import dashboard from './views/admin/dashboard';



export default [{
        path: '/admin/dashboard',
        component: dashboard
    },
    {
        path: '/admin/dashboard/login',
        component: loginAdmin
    }
]
