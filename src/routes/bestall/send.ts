import axios, { AxiosError, AxiosResponse } from 'axios';
import type { Request, Response } from 'express';

export function post(req: Request, res: Response) {
    // Load data
    const phone_number: string = req.body.phone_number;
    const full_address: string = req.body.full_address;
    const lat: number = req.body.lat;
    const lng: number = req.body.lng;

    const data = { coordinates: [lat, lng], phone_number, full_address };

    axios.post(process.env.ORDER_SERVICE_URL + '/order', data).then((response: AxiosResponse) => {
        if (response.status != 200) {
            return res.status(response.status).json(response.data).send();
        }
        return res.json(response.data).send();
    }).catch((err: AxiosError) => {
        console.log(err);
        if(err.response.hasOwnProperty('data'))
            return res.status(500).json(err.response.data).send();
        return res.status(500).json('An error occured!').send();
    });
}