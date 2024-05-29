import { Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('github')
@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}
  @Get('google-repos')
  @ApiOperation({ summary: 'Get top 10 popular repositories for Google' })
  @ApiResponse({
    status: 200,
    description: 'Return top 10 Google repositories.',
  })
  getGoogleRepo() {
    return this.githubService.getGoogleRepo();
  }
}
