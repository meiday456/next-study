import {NextApiRequest, NextApiResponse} from "next";

export default async (req : NextApiRequest ,res : NextApiResponse)=>{
    // if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    //     return res.status(401).json({ message: 'Invalid token' })
    // }

    const {body} = req

    try {

        await res.revalidate('/isr/books')
        await res.revalidate(`/isr/books/${body.id}`)
        return res.json({ revalidated: true })
    } catch (err) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        return res.status(500).send('Error revalidating')
    }
}

