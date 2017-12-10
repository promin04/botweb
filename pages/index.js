import Layout from '../components/Layout';
import RaisedButton from 'material-ui/Button';
const Index = () => (
  <Layout>
  <div className='index'>
    <div className="container">
      <div className='row'>
        <div className='col-xs-12 col-sm-6'></div>
        <div className='col-xs-12 col-sm-6'>
          <div>มาทำให้การขายนั้นง่ายขึ้น</div>
          <RaisedButton color="primary" raised={true} > Log In </RaisedButton>
        </div>
      </div>
    </div>
  </div>
  </Layout>
)

export default Index
