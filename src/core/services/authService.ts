import ApiAuthRepository from '../../data/repositories/ApiAuthRepository';

class AuthService {
    constructor(private authRepository: ApiAuthRepository) {}

    async login(username: string, password: string): Promise<boolean> {
        // Lógica de validação de credenciais, se necessário
        // Por exemplo, verificar se os campos de entrada não estão vazios

        // Chamar o método de autenticação do repositório
        // return await this.authRepository.authenticate(username, password);

        console.log({ username, password });

        return true;
    }
}

export default AuthService;
