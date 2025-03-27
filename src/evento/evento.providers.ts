import { DataSource } from "typeorm";
import { Eventos } from "./evento.entity";

export const eventoProviders= [
    {
        provide: "EVENTO_REPOSITORY",
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Eventos),
        inject: ["DATA_SOURCE"]
    }
]