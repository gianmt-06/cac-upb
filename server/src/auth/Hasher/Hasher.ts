import bcryptjs from "bcryptjs";
import HasherManagerPort from "./domain/port/driven/HasherManagerPort";

export default class Hasher implements HasherManagerPort {

    public async hashPassword(password: string) {
        try {
            const saltRounds = 10;
            return await bcryptjs.hash(password, saltRounds);
        } catch (error) {
            throw new Error('Error al hashear la contraseña');
        }
    }

    async comparePassword(plainPassword: string, hashPassword: string): Promise<boolean> {
        try {
            return await bcryptjs.compare(plainPassword, hashPassword);
        } catch (error) {
            throw new Error('Error al comparar contraseñas')
        }
    }
}