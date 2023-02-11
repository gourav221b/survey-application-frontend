
import React from 'react'
import { Routes, Route, Router, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import RequireAuth from '../components/RequireAuth'
import { roles } from '../constants/Roles'
import Main from '../pages/Main'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/Profile/Profile.jsx'
import ManageForm from '../pages/ManageForm'
import SingleForm from '../pages/SingleForm'

function RoutesPath() {
    const role = localStorage.getItem('roles')
    return (

        <Routes>
            <Route path="/" element={<Layout />} exact>
                <Route path="calender" element={<>calender</>} />
                <Route path="unauthorized" element={<>unauthorized</>} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route
                    element={
                        <RequireAuth
                            allowedRoles={[roles.SUPER_ADMIN, roles.ADMIN, roles.SURVEYOR]}
                        />
                    }
                >
                    <Route path="profile" element={<>profile</>} />
                </Route>

                <Route element={<RequireAuth allowedRoles={[roles.ADMIN, roles.SUPER_ADMIN, roles.SURVEYOR]} />} >
                    <Route path="dashboard" element={<Main role={role} />} >
                        <Route path="profile" element={<Profile role={role} />} />
                    </Route>
                </Route>

                <Route element={<RequireAuth allowedRoles={[roles.SUPER_ADMIN]} />}>
                    <Route path="dashboard" element={<Main role={role} />} >
                        <Route path="create-admins" element={<>create admin page</>} />
                        <Route path="manage-admins" element={<>manage admin page</>} />
                        <Route path="manage-form" element={<ManageForm />} />
                        <Route path="manage-form/:id" element={<SingleForm />} />
                    </Route>
                </Route>

                <Route element={<RequireAuth allowedRoles={[roles.ADMIN]} />}>
                    <Route path="dashboard" element={<Main role={role} />} >
                        <Route path="create-form" element={<>create form</>} />
                        <Route path="manage-form" element={<ManageForm />} />
                        <Route path="manage-form/:id" element={<SingleForm />} />
                    </Route>
                </Route>
                <Route element={<RequireAuth allowedRoles={[roles.SURVEYOR]} />}>
                    <Route path="dashboard" element={<Main role={role} />} >
                        <Route path="request-form" element={<>request form</>} />
                    </Route>
                </Route>
                <Route path="*" element={<>404 not found</>} />
            </Route>
        </Routes >

    )
}

export default RoutesPath