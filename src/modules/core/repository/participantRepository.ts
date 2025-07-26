import { Participant, PrismaClient } from '@generated';

export function createParticipantRepository(prisma: PrismaClient) {
    return {
        async getById(id: string): Promise<Participant | null> {
            return prisma.participant.findUnique({
                where: {
                    id,
                },
                include: {
                    guardians: true,
                },
            });
        },

        async findByTenantId(tenantId: string): Promise<Participant[]> {
            return prisma.participant.findMany({
                where: {
                    tenantId,
                },
            });
        },

        async update(id: string, data: Participant): Promise<Participant> {
            return prisma.participant.update({
                where: {
                    id,
                },
                data,
            });
        },

        async create(data: Participant): Promise<Participant> {
            return prisma.participant.create({
                data,
            });
        },

        async delete(id: string): Promise<Participant> {
            return prisma.participant.delete({
                where: {
                    id,
                },
            });
        },
    };
}
