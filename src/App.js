import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import TodoForm from "./components/TodoForm"
import TodoStats from "./components/TodoStats"
import TodoList from "./components/TodoList"
import AboutIconLink from "./components/AboutIconLink"
import AboutPage from "./pages/AboutPage"
import { TodoProvider } from "./context/TodoContext"

function App() {
    return (
        <Router>
            <Header />
            <div className="container-lg px-0 px-sm-3">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <TodoProvider>
                                <TodoForm />
                                <TodoStats />
                                <TodoList />
                            </TodoProvider>
                        }
                    />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                <AboutIconLink />
            </div>
        </Router>
    )
}

export default App
