from django.contrib.auth.models import User, Group
from rest_framework import serializers
from CensorThis_WebApp.models import Censor

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class CensorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Censor
        fields = ['toCensor', 'censorWith']
    
    def create(self, validated_data):
        toCensor = validated_data.get('toCensor', None)
        if toCensor is not None:
            censor = Censor.objects.filter(toCensor = toCensor).first()
            if censor is not None:
                newCensor = censor
                newCensor.censorWith = validated_data.get("censorWith", None);
                return newCensor

        newCensor = Censor.objects.create(**validated_data)
        return newCensor