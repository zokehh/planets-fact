import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"

import Earth from "./pages/Earth"
import Jupiter from "./pages/Jupiter"
import Mars from "./pages/Mars"
import Mercury from "./pages/Mercury"
import Neptune from "./pages/Neptune"
import NotFound from "./pages/NotFound"
import Saturn from "./pages/Saturn"
import Uranus from "./pages/Uranus"
import Venus from "./pages/Venus"
import Welcome from "./pages/Welcome"

const App = () => {
    return (
        <Layout>
            <div className='container'>
                <Routes>
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/" element={<Navigate to='/welcome' />} />

                    <Route path="/mercury" element={<Mercury />} />
                    <Route path="/venus" element={<Venus />} />
                    <Route path="/earth" element={<Earth />} />
                    <Route path="/mars" element={<Mars />} />
                    <Route path="/jupiter" element={<Jupiter />} />
                    <Route path="/saturn" element={<Saturn />} />
                    <Route path="/uranus" element={<Uranus />} />
                    <Route path="/neptune" element={<Neptune />} />

                    <Route path="/planets-fact/" element={<Navigate to='/welcome' />} />

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </Layout>
    )
}

export default App