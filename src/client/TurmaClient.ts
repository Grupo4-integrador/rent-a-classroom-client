/* eslint-disable @typescript-eslint/no-explicit-any */
import apiFetch from '~axios/axios';
import { AxiosResponse } from 'axios';
import { Turma } from '~model/TurmaModel';
class TurmaClient {
	public async findById(id: number): Promise<Turma> {
		try {
			return (await apiFetch.get<Turma>(`/${id}`)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async findAll(): Promise<Turma[]> {
		try {
			return (await apiFetch.get<Turma[]>(`/lista`)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async findAtivo(): Promise<Turma[]> {
		try {
			return (await apiFetch.get<Turma[]>(`/ativo`)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async cadastrar(turma: Turma): Promise<string> {
		try {
			return (await apiFetch.post<string>(``, turma)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async editar(id: number, turma: Turma): Promise<string> {
		try {
			return (await apiFetch.put<string>(`/${id}`, turma)).data;
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

export default new TurmaClient();
