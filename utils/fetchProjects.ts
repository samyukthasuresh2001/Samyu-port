import { sanityClient } from "@/sanity";
import { Project } from "../typing";
import { groq } from "next-sanity";

const query = groq`
    *[_type == 'project'] |  order(_createdAt asc) {
      ...,
      technologies[]->
    }
`;

export const fetchProjects = async() => {
    const res = await sanityClient.fetch(query)

    const projects: Project[] = await sanityClient.fetch(query);

    return projects 

    // console.log('fetching', projects);

    return projects;
}