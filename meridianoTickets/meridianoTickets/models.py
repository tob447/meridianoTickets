# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django.contrib.auth.models import AbstractUser




class Ct(models.Model):
    ct = models.CharField(db_column='CT', max_length=50, blank=True, null=True)  # Field name made lowercase.
    descripcion = models.CharField(db_column='Descripcion', max_length=250, blank=True, null=True)  # Field name made lowercase.
    estado = models.IntegerField(db_column='Estado', blank=True, null=True)  # Field name made lowercase.
    razonparo_fk = models.IntegerField(db_column='RazonParo_fk', blank=True, null=True)  # Field name made lowercase.
    planta_grupoct_fk = models.IntegerField(db_column='Planta_GrupoCT_fk', blank=True, null=True)  # Field name made lowercase.
    monitoreado = models.BooleanField(db_column='Monitoreado', blank=True, null=True)  # Field name made lowercase.
    cc = models.CharField(db_column='CC', max_length=50, blank=True, null=True)  # Field name made lowercase.
    publicartiemporeal = models.BooleanField(db_column='PublicarTiempoReal', blank=True, null=True)  # Field name made lowercase.
    activa = models.BooleanField(db_column='Activa', blank=True, null=True)  # Field name made lowercase.
    costostd = models.FloatField(db_column='CostoStd', blank=True, null=True)  # Field name made lowercase.
    loteprod_fk = models.IntegerField(db_column='LoteProd_fk', blank=True, null=True)  # Field name made lowercase.
    maxfechacarga = models.DateField(db_column='MaxFechaCarga', blank=True, null=True)  # Field name made lowercase.
    factorconversion = models.FloatField(db_column='FactorConversion', blank=True, null=True)  # Field name made lowercase.
    fcdesdect = models.BooleanField(db_column='FCDesdeCT', blank=True, null=True)  # Field name made lowercase.
    ultimolote = models.IntegerField(db_column='UltimoLote', blank=True, null=True)  # Field name made lowercase.
    nroetiquetasimpresionvariable = models.BooleanField(db_column='NroEtiquetasImpresionVariable', blank=True, null=True)  # Field name made lowercase.
    ordenescontroladasencentrotrabajo = models.IntegerField(db_column='OrdenesControladasEnCentroTrabajo', blank=True, null=True)  # Field name made lowercase.
    totalenmaquina = models.IntegerField(db_column='TotalEnMaquina', blank=True, null=True)  # Field name made lowercase.
    detalleparoactual = models.TextField(db_column='DetalleParoActual', blank=True, null=True)  # Field name made lowercase.
    enmantenimiento = models.BooleanField(db_column='EnMantenimiento', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'CT'
        managed=False


class Paros(models.Model):
    tiempoparo = models.IntegerField(db_column='tiempoParo', blank=True, null=True)  # Field name made lowercase.
    fecha = models.DateTimeField(blank=True, null=True)
    codigoparo_fk = models.IntegerField(db_column='codigoParo_fk', blank=True, null=True)  # Field name made lowercase.
    job_fk = models.IntegerField(blank=True, null=True)
    ct_fk = models.IntegerField(db_column='CT_fk', blank=True, null=True)  # Field name made lowercase.
    ciclosparos = models.IntegerField(db_column='CiclosParos', blank=True, null=True)  # Field name made lowercase.
    turno = models.IntegerField(db_column='Turno', blank=True, null=True)  # Field name made lowercase.
    fechacalc = models.DateField(db_column='FechaCalc', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'Paros'
        managed=False


class User(AbstractUser):
    username = models.CharField(db_column='usuario' , unique=True, max_length=50)
    email = models.CharField(max_length=50, blank=True, null=True)
    password = models.CharField(db_column='pass', max_length=500, blank=True, null=True)  # Field renamed because it was a Python reserved word.
    nivelacceso = models.IntegerField(db_column='nivelAcceso', blank=True, null=True)  # Field name made lowercase.
    activo = models.BooleanField(db_column='Activo', blank=True, null=True)  # Field name made lowercase.
    nombre = models.CharField(db_column='Nombre', max_length=50, blank=True, null=True)  # Field name made lowercase.
    correo = models.CharField(db_column='Correo', max_length=50, blank=True, null=True)  # Field name made lowercase.
    cargo = models.CharField(db_column='Cargo', max_length=50, blank=True, null=True)  # Field name made lowercase.
    telefono =models.CharField(max_length=20,blank=True, null=True)
    USERNAME_FIELD='username'
    class Meta:
        db_table = 'usuarios'
'''
class User(AbstractUser):
    id = models.IntegerField(blank=True, null=False,primary_key=True)
    username = models.CharField(db_column='usuario', max_length=50, blank=True, null=True,unique=True)
    email = models.CharField(max_length=50, blank=True, null=True)
    password = models.CharField(db_column='pass', max_length=50, blank=True, null=True)  # Field renamed because it was a Python reserved word.
    nivelacceso = models.IntegerField(db_column='nivelAcceso', blank=True, null=True)  # Field name made lowercase.
    is_active = models.BooleanField(db_column='Activo', blank=True, null=True)  # Field name made lowercase.
    correo = models.CharField(db_column='Correo', max_length=50, blank=True, null=True)  # Field name made lowercase.
    cargo = models.CharField(db_column='Cargo', max_length=50, blank=True, null=True)  # Field name made lowercase.

    # Apartir de aca son nuevos campos o campos modificados por mi
    
    telefono = models.CharField(max_length=15,null=True)
    is_superuser=models.BooleanField(blank=True,null=True)
    is_staff=models.BooleanField(blank=True,null=True)
    last_login=models.DateTimeField(blank=True,null=True)
    date_joined=models.DateField(blank=True,null=True)
    
    
    first_name = models.CharField(db_column='Nombre', max_length=50, blank=True, null=True)
    class Meta:
        db_table = 'usuarios'
'''