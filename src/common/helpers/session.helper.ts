import { Request, Response } from 'express';
import { User } from '../../models/user';
import { Exception } from '../exceptions/exception';

export abstract class SessionHelper {

    public static async verify(req: Request, res: Response) {
        if (!req.session['user']) {
            res.redirect(`/admin/login`);
        }
        else {
            const user: User = await User.findOne({
                where: {
                    username: req.session['user'].username
                }
            });

            if (!user)
                throw new Exception('Você não tem permissão para executar esta ação!');
        }
    }

    public static setSession(req: Request, user: User) {
        user.password = null;
        req.session['user'] = user;
    }

    public static clearSession(req: Request) {
        delete req.session['user'];
    }

    public static getLoggedUser(req: Request): User {
        return req.session['user'];
    }
}