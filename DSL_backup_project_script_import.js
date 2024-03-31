listView('SoftUni_Student-DSL') {
    description('Jobs for SoftUni Project')

    jobs {
        job('SoftUni_Student-DSL') {
            steps {
                shell('npm install')
                shell('npm audit')
              	shell('npm run test')
            }
        }
    }
}