import React, { useState, useEffect } from 'react'
import { ListPage } from 'material-ui-shell/lib/containers/Page'
import Pagination from "@material-ui/lab/Pagination";
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { useIntl } from 'react-intl'
import TutorialDataService from "./services/TutorialService"

import list from './data.json';

const fields = [
  {
    name: 'nombre',
    label: 'Nombre',
  },
  {
    name: 'email',
    label: 'E-Mail',
  },
  {
    name: 'orden',
    label: 'Orden',
    type: 'number',
  },
  {
    name: 'isActive',
    label: 'fiambre',
    type: 'bool',
  },
  {
    name: 'documento',
    label: 'Documento',
    type: 'date',
  },
  /*   {
      name: 'registrationTime',
      label: 'Registration time',
      type: 'time',
    },
   */
]

const Row = ({ index, style, data }) => {

  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const { nombre, email, orden, isActive, documento } = data
  console.log('Row');
  return (
    <div key={`${nombre}_${index}`} style={style}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={`${nombre} ${index}`}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textSecondary"
              >
                {email}
              </Typography>
              <br />
              <Typography
                component="span"
                variant="body2"
                color="textSecondary"
              >
                {`${orden} ${documento}`}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
    </div>
  )
}


export default function () {
  const intl = useIntl()

  const [tutorials, setTutorials] = useState([]);

  const RetrieveTutorials = () => {
  
    let params = {};
    console.log('HOLA MUNDO ENTERO');
    params["size"] = 40000;

    TutorialDataService.getAll(params)
      .then((response) => {
        const { tutorials, totalPages } = response.data;
        setTutorials(tutorials);
        //    setCount(totalPages);
        console.log('HOLA MUNDO ENTERO 2');
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  
  useEffect(() => {
    RetrieveTutorials({});
  }, []);

  return (
    <ListPage
      name="my_list_demo"
      list={tutorials}
      fields={fields}
      Row={Row}
      listProps={{ itemSize: 91 }}
      getPageProps={(list) => {
        return {
          pageTitle: intl.formatMessage(
            {
              id: 'my_list_demo',
              defaultMessage: 'Cardioprieto pacientes con {count} pacientes',
            },
            { count: list.length }
          ),
        }
      }}
    />
  )
}
