-- CreateEnum
CREATE TYPE "StatusPaciente" AS ENUM ('FILA', 'ESPERA', 'ATENDIMENTO', 'FINALIZADO');

-- CreateTable
CREATE TABLE "setor" (
    "id" TEXT NOT NULL,
    "nomeSetor" TEXT NOT NULL,
    "isPrimeiroContato" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "setor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "atendente" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "fkSetor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "atendente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paciente" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ticket" TEXT NOT NULL,
    "prioridade" BOOLEAN NOT NULL,
    "atendimentoInfantil" BOOLEAN NOT NULL,
    "status" "StatusPaciente" NOT NULL,
    "fkSetor" TEXT NOT NULL,
    "fkAtendente" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anuncio" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "urlYoutube" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Anuncio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Configuracao" (
    "id" TEXT NOT NULL,
    "parametro" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Configuracao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "atendente" ADD CONSTRAINT "atendente_fkSetor_fkey" FOREIGN KEY ("fkSetor") REFERENCES "setor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paciente" ADD CONSTRAINT "paciente_fkSetor_fkey" FOREIGN KEY ("fkSetor") REFERENCES "setor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paciente" ADD CONSTRAINT "paciente_fkAtendente_fkey" FOREIGN KEY ("fkAtendente") REFERENCES "atendente"("id") ON DELETE SET NULL ON UPDATE CASCADE;
