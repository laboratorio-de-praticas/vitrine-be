import { Injectable, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class AuthService {
  private authUrl: string;

  constructor() {
    this.authUrl = process.env.VITRINE_AUTENTICACAO_HOST || 'http://localhost:3000';
  }

  async getProfile(token: string): Promise<any> {
    try {
      const response = await fetch(`${this.authUrl}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return await response.json();
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new UnauthorizedException('Falha em obter o perfil do usuário');
    }
  }

  async getUserRole(token: string): Promise<any> {
    try {
      const response = await fetch(`${this.authUrl}/users/role`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return await response.json();
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new UnauthorizedException('Falha em obter o role do usuário');
    }
  }

  async validateToken(token: string): Promise<boolean> {
    try {
      await this.getProfile(token);
      return true;
    } catch (error) {
      return false;
    }
  }

  async isAdmin(token: string): Promise<boolean> {
    try {
      const roleData = await this.getUserRole(token);
      return roleData.tipo_usuario === 'Admin' || roleData.tipo_usuario === 'ADMINISTRADOR';
    } catch (error) {
      return false;
    }
  }
}