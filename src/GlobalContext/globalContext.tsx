import React, { createContext, useEffect, useState } from "react"
import { httpClient } from "../services/httpClient"


export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {
  
  const [students, setStudents] = useState([])
  const [searchStudent, setSearchStudent] = useState("")
  const [sortParameter, setSortParameter] = useState("a-z")

  useEffect(() => {
    httpClient.get(`/students`).then(({ data }) => {

      
      setStudents(data)

    })
  }, [])
  return (
    <GlobalContext.Provider
      value={{
        students,
        setStudents,
        searchStudent,
        setSearchStudent,
        sortParameter,
        setSortParameter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}