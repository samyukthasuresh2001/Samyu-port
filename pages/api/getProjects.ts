'use client';
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Project } from "@/typing";

const query = groq`
     *[_type == "project"] |  order(_createdAt asc)
 {
        ...,
        technologies[]->
     }
     `;


type Data = {
    projects: Project[]
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const projects: Project[] = await sanityClient.fetch(query);

    res.status(200).json({ projects})
}

