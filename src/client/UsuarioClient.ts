/* eslint-disable @typescript-eslint/no-explicit-any */
import apiFetch from '~axios/axios';
import { AxiosResponse } from 'axios';
import { Usuario } from '~model/UsuarioModel';
class UsuarioClient {
	public async findById(id: number): Promise<Usuario> {
		try {
			return (await apiFetch.get<Usuario>(`/${id}`)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async findAll(): Promise<Usuario[]> {
		try {
			return (await apiFetch.get<Usuario[]>(`/lista`)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async findAtivo(): Promise<Usuario[]> {
		try {
			return (await apiFetch.get<Usuario[]>(`/ativo`)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async cadastrar(usuario: Usuario): Promise<string> {
		try {
			return (await apiFetch.post<string>(``, usuario)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async editar(id: number, usuario: Usuario): Promise<string> {
		try {
			return (await apiFetch.put<string>(`/${id}`, usuario)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async excluir(id: number): Promise<string> {
		try {
			const responde: AxiosResponse<string> = await apiFetch.delete(``, {
				params: { id }
			});
			return responde.data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
}

export default new UsuarioClient();
