
from rest_framework import viewsets
from .models import User, Ticket,CodigosParos
from .serializers import UserSerializer,TicketSerializer,CodigosParosSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
import boto3
from django.shortcuts import get_object_or_404
import datetime
from rest_framework.permissions import IsAuthenticated

class UserViewSet(viewsets.ModelViewSet):
    permission_classes=(IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TicketViewSet(viewsets.ViewSet):
    #permission_classes=(IsAuthenticated,)
    serializer_class=TicketSerializer
    queryset=CodigosParos.objects.all()
    def create(self,request):
        serializer=TicketSerializer(data=request.data,context={'request': request})
        client = boto3.client(
        "sns",
        aws_access_key_id="AKIASRAASLXJIC5JIBOI",
        aws_secret_access_key="5lr6jK/gMScnvH0l0Yi02EhtkLBvPYp63G9Mh6n+",
        region_name="us-east-1"
        )

        # Send your sms message.
        client.publish(
            PhoneNumber=request.data['tel'],
            Message="Ayuda solictada maquina 1"
        )
        del request.data['tel']
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def list(self,request):
        queryset=Ticket.objects.all()
        serializer=TicketSerializer(queryset,many=True,context={'request': request})
        return Response(serializer.data)

    def put(self,request):
        instance=Ticket.objects.get(pk=str(request.data.get('id')))
        codigosParos=CodigosParos.objects.get(pk=str(request.data.get('causa')))
        instance.causa=codigosParos
        instance.solucion=request.data.get('solucion')
        instance.estaCerrado=True
        instance.cierreTicket=datetime.datetime.now()
        instance.save()

        serializer=TicketSerializer(instance)
        return Response(serializer.data)



class CodigosParosViewSet(viewsets.ModelViewSet):
    permission_classes=(IsAuthenticated,)
    queryset=CodigosParos.objects.all()
    serializer_class=CodigosParosSerializer


        
