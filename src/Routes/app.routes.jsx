import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { NewNote } from '../pages/NewNote'
import { Preview } from '../pages/Preview'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={ <Home/>}  />
            <Route path="/profile" element={ <Profile/>}  />
            <Route path="/new" element={ <NewNote/>}  />
            <Route path="/preview/:id" element={ <Preview/>}  />
            <Route path="*" element={<Navigate to="/" />} />

        </Routes>
    )
}