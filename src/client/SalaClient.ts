/* eslint-disable @typescript-eslint/no-explicit-any */
import apiFetch from '~axios/axios';
import { AxiosResponse } from 'axios';
import { Sala } from '~model/SalaModel';
class SalaClient {
	public async findById(id: number): Promise<Sala> {
		try {
			return (await apiFetch.get<Sala>(`/${id}`)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async findAll(): Promise<Sala[]> {
		try {
			return (await apiFetch.get<Sala[]>(`/lista`)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async findAtivo(): Promise<Sala[]> {
		try {
			return (await apiFetch.get<Sala[]>(`/ativo`)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async cadastrar(sala: Sala): Promise<string> {
		try {
			return (await apiFetch.post<string>(``, sala)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async editar(id: number, sala: Sala): Promise<string> {
		try {
			return (await apiFetch.put<string>(`/${id}`, sala)).data;
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

export default new SalaClient();
