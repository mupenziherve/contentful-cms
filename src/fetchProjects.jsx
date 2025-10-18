import { useState, useEffect } from "react";

import { createClient } from "contentful";

const client = createClient({
  space: '99ct4foypxej',
  environment: 'master',
  accessToken: 'RUvjkNoMgwhW-6soyNnzxGk6Fwed1QElRUQj25SV4q0',
});

const useFetchProjects = () =>{
  const [loading,setLoading] = useState(true)
  const [projects, setProjects] = useState([])


}

client.getEntries({ content_type: 'projects'})
.then((response)=> console.log(response));