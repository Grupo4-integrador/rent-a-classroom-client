/* eslint-disable @typescript-eslint/no-explicit-any */
import apiFetch from '~axios/axios';
import { AxiosResponse } from 'axios';
import { Data } from '~model/DataModel';

class DataClient {
	public async findById(id: number): Promise<Data> {
		try {
			return (await apiFetch.get<Data>(`/${id}`)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async findAll(): Promise<Data[]> {
		try {
			return (await apiFetch.get<Data[]>(`/lista`)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async cadastrar(data: Data): Promise<string> {
		try {
			return (await apiFetch.post<string>(``, data)).data;
		} catch (error: any) {
			return Promise.reject(error.response);
		}
	}
	public async editar(id: number, data: Data): Promise<string> {
		try {
			return (await apiFetch.put<string>(`/${id}`, data)).data;
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

export default new DataClient();
