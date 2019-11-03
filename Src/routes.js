import loginAdmin from './Views/admin/login';
import dashboard from './Views/admin/dashboard';



export default [{
        path: '/admin/dashboard',
        component: dashboard
    },
    {
        path: '/admin/dashboard/login',
        component: loginAdmin
    }
]
