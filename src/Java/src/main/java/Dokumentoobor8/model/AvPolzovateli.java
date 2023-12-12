package Dokumentoobor8.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dokumentoobor8.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: АвПользователи
 */
@Entity(name = "IISDokumentoobor8АвПользователи")
@Table(schema = "public", name = "АвПользователи")
public class AvPolzovateli {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Логин")
    private String логин;

    @Column(name = "ДатаРегистрации")
    private Date датарегистрации;

    @Column(name = "Пароль")
    private String пароль;

    @Column(name = "IDПользователя")
    private Integer idпользователя;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @OneToMany(mappedBy = "avpolzovateli", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHPrava> tchpravas;


    public AvPolzovateli() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getЛогин() {
      return логин;
    }

    public void setЛогин(String логин) {
      this.логин = логин;
    }

    public Date getДатаРегистрации() {
      return датарегистрации;
    }

    public void setДатаРегистрации(Date датарегистрации) {
      this.датарегистрации = датарегистрации;
    }

    public String getПароль() {
      return пароль;
    }

    public void setПароль(String пароль) {
      this.пароль = пароль;
    }

    public Integer getIDПользователя() {
      return idпользователя;
    }

    public void setIDПользователя(Integer idпользователя) {
      this.idпользователя = idпользователя;
    }


}