arrayName=( 'OL2019' 'ANDROID10GMAILAPP' 'ANDROID10GMAILAPPDARK' )

echo "{\"imagesData\": [" >> cypress/fixtures/"litmus-data.json"
for i in "${arrayName[@]}"
do
  curl -X "GET" "https://instant-api.litmus.com/v1/emails/253bba44-9bd8-48d5-be80-0369808235c1/previews/${i}" >> cypress/fixtures/"litmus-data.json"
  if ! [ ${arrayName[${#arrayName[@]}-1]}  = $i ]
  then
    echo ',' >> cypress/fixtures/"litmus-data.json"
  fi
done
  echo "]}" >> cypress/fixtures/"litmus-data.json"
