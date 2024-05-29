import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GithubService {
  async getGoogleRepo() {
    try {
      const response = await axios.get(
        `https://api.github.com/users/google/repos?sort=stars&per_page=10`,
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching Google repo... ${error}`);
    }
  }
}
