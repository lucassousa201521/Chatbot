const axios = require('axios');
class GitController {
    async consult(request, response) {
        let numcarrossel = request.query.carrossel;
        axios.get('https://api.github.com/orgs/takenet/repos?page=1&per_page=1')
            .then(function(resp) {
                return response.json({
                    data: resp.data
                });
            })

    }
}
module.exports = new GitController();