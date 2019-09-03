class Github{
    constructor() {
        this.client_id = 'eef8cb8434d08fb3daeb';
        this.client_secret = '4485593a5dc44fdbab4ed220a836cae43a05e610';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        
        return {
              profile,  // profile: profile,  
              repos  
        };
    }
}