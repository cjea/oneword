package main

import (
  "net/http"
  "fmt"
  
)

func main() {
  http.HandleFunc("/", mainHandler)
  fmt.Println("Listening on port 8080 . . .")
  http.ListenAndServe(":8080", nil)
}

func mainHandler(w http.ResponseWriter, r *http.Request) {
  target := ""
  if r.URL.Path == "/" {
    target = "/index.html"
  } else {
    target = r.URL.Path
  }
  http.ServeFile(w, r, "client" + target)
}
