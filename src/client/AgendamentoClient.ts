/* eslint-disable @typescript-eslint/no-explicit-any */
import { Agendamento } from '~model/AgendamentModel';
import apiFetch from '~axios/axios';
import { AxiosResponse } from 'axios';

class AgendamentoClient {
	public async findById(id: number): Promise<Agendamento> {
		try {
			return (await apiFetch.get<Agendamento>(`/${id}`)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async findAll(): Promise<Agendamento[]> {
		try {
			return (await apiFetch.get<Agendamento[]>(`/lista`)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async cadastrar(agendamento: Agendamento): Promise<string> {
		try {
			return (await apiFetch.post<string>(``, agendamento)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async editar(id: number, agendamento: Agendamento): Promise<string> {
		try {
			return (await apiFetch.put<string>(`/${id}`, agendamento)).data;
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

export default new AgendamentoClient();
